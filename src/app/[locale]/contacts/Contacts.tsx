'use client'

import { FC } from 'react'
import { useParams } from 'next/navigation'
import { ContactsForm } from '@/shared/components'
import { test } from '@/shared/data'

const Contacts: FC = () => {
  const params = useParams<{ locale: string }>()
  console.log(params.locale)
  console.log(test[params.locale])
  return <ContactsForm />
}

export default Contacts
