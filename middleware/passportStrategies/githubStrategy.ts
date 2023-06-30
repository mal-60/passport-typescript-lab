import { Strategy as GitHubStrategy } from 'passport-github2';
import { PassportStrategy } from '../../interfaces/index';
import 'dotenv/config'

const githubStrategy: GitHubStrategy = new GitHubStrategy(
    {
        clientID: `${process.env.CLIENT_ID}`,
        clientSecret: `${process.env.CLIENT_SECRET}`,
        callbackURL: "https://localhost:8000/auth/github/callback",
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
        done(null, profile);
    },
);  

const passportGitHubStrategy: PassportStrategy = {
    name: 'github',
    strategy: githubStrategy,
};

export default passportGitHubStrategy;
