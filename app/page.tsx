import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-full px-4 md:px-8 py-4 h-full flex flex-col md:flex-row items-center justify-between gap-7">
      <div className='mt-11'>
        <h1 className='text-4xl md:text-7xl font-mono font-bold max-w-4/5 sm:max-w-xs md:max-w-md sm:text-left text-center'>Welcome to <span className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>ShadCn Expo</span></h1>
        <p className='leading-relaxed mt-4 sm:text-left text-center w-full sm:max-w-xs md:max-w-md text-sm md:text-lg'>Quick recap of nextauth and added knowledge of drizzle-orm and NeonDb</p>
      </div>
      <div className="w-[800px] h-[650px] rounded-2xl border-4 border-slate-100 overflow-hidden">
        <Image
          src='https://th.bing.com/th/id/OIG3.wAf3aevVfE9lRPlt3863?w=270&h=270&c=6&r=0&o=5&pid=ImgGn'
          alt='illustration'
          width={600}
          height={600}
          className='w-full object-cover'
        />
      </div>
    </main>
  )
}
