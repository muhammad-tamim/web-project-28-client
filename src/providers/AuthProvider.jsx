// AuthProvider.jsx
import { auth } from '../firebase/firebase.init'
import { AuthContext } from '../contexts/AuthContext'
import { useEffect, useState } from 'react'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, } from 'firebase/auth'

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)

    })
    return () => {
      unsubscribe()
    }
  }, [])

  const authData = {
    user,
    setUser,
    logOut,
    signInWithGoogle,
    loading,
    setLoading,
  }
  return <AuthContext value={authData}>{children}</AuthContext>
}

export default AuthProvider
