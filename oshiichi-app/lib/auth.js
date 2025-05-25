import jwt from 'jsonwebtoken'

export async function verifyToken(token) {
  if (!token) return null
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return decoded
  } catch (error) {
    return null
  }
}
