import passport from 'passport';
import { JwtStrategy } from './jwtStrategy.js';

passport.use(JwtStrategy);
