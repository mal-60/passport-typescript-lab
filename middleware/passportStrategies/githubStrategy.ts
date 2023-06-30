import { Strategy as GitHubStrategy } from 'passport-github2';
import { PassportStrategy } from '../../interfaces/index';
import { error } from 'console';

const githubStrategy: GitHubStrategy = new GitHubStrategy(
    {
        clientID: "4804b1aa35d7bbd4c84c",
        clientSecret: "42b2e128c2dcee112230f0ed5e3654662fc8b425",
        callbackURL: "http://localhost:8000/auth/github/callback",
        passReqToCallback: true,
    },
    
    /* FIX ME 😭 */
    async (req: any, accessToken: any, refreshToken: any, profile: any, done: any) => {
        // const { email, username } = profile;
        // done(null, user)
        // on profile
        // profile.email
        // profile.username
        // { email, username } -> save into your database
        // done(null, { email, username })
        done(error, profile);
    },
);  

const passportGitHubStrategy: PassportStrategy = {
    name: 'github',
    strategy: githubStrategy,
};

export default passportGitHubStrategy;
