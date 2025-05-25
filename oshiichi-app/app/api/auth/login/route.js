import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import jwt from 'jsonwebtoken'

export async function POST(request) {
  try {
    const { email, password, userType } = await request.json()

    // ここにSupabaseでの認証処理を実装
    // デモ用の簡易実装
    const token = jwt.sign(
      { email, userType },
      process.env.JWT_SECRET || 'demo-secret',
      { expiresIn: '7d' }
    )

    return NextResponse.json({ token, user: { email, userType } })
  } catch (error) {
    return NextResponse.json(
      { error: 'ログインに失敗しました' },
      { status: 500 }
    )
  }
}
