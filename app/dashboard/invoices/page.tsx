'use client';
import { useEffect } from 'react';

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <p>Invoices Page</p>;
}