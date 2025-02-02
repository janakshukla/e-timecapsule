'use client'

export default function GlobalError({ error, reset }) {
  return (
    <html className="h-full bg-gray-100">
      <body className="flex flex-col items-center justify-center min-h-screen p-4">
        <h2 className="text-2xl font-bold mb-4 text-red-600">Something went wrong!</h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => reset()}
        >
          Try again
        </button>
      </body>
    </html>
  )
}