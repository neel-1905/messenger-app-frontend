import { View, Text } from 'react-native'
import React from 'react'
import { authClient } from '@/lib/auth-client'

export default function HomeScreen() {

    const {data: session} = authClient.useSession()

  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>Welcome, {session?.user.name}</Text>
    </View>
  )
}