import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: '326686648660-2l1vkj0p1d8hb6mt12e562ihgc9e13hp.apps.googleusercontent.com',
      clientSecret: '-mGva7I3D8tW-hCGsgavGDJE'
    }),
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database

})