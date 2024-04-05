import bcrypt from 'bcryptjs';
import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';
import User from '../models/user.model';
import { getUserByEmail } from '../services/user.services';

const jwtSecret = 'your_jwt_secret'; // Reemplaza con tu secreto JWT real

passport.use(
  new LocalStrategy(async (email, password, done) => {
    try {
      const user = await getUserByEmail(email);
      if (!user) {
        return done(null, false, { message: 'Incorrect username' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Incorrect password' });
      }
    } catch (error) {
      console.log(error);
      return done(error);
    }
  })
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret
    },
    async (jwtPayload, done) => {
      try {
        const user = await User.findById(jwtPayload.id);
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);

export const authenticateLocal = passport.authenticate('local', { session: false });
export const authenticateJwt = passport.authenticate('jwt', { session: false });
