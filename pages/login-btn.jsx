import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginButton() { 
  if (typeof window !== 'undefined') {
    const { data: session } = useSession()
    if (session) {
      return (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()} className="text-white p-2 px-4 rounded-lg"> Sign out</button>
        </>
      )
    }
    return (
      <>
        <p className="bg-red-900">Not signed in <br /></p>
        <div className="w-screen h-screen flex items-center">
          <div className="text-center w-full">
            <button onClick={() => signIn()} className="text-white p-2 px-4 rounded-lg">
              Login with Google
            </button>
          </div>
        </div>
      </>
    )
  }
  return null
}
