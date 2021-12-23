const navigation =[
    {  name: 'Shop', href: "/"  },
    {  name: 'Terms', href: "/terms"  },
    {  name: 'Blog', href: "/blog"  },
    {  name: 'About', href: "/about" }
]

export default function Footer() {
    return (
        <footer className="bg-white">
            <div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
               <nav className="flex flex-wrap justify-center">
                {
                  navigation.map( (item , i) =>(
                      <div key={`foot-${i}`} className='px-6 py-2'>
                        <a href={item.href} className='text-gray-500 hover:text-gray-900'>
                            {item.name}
                        </a>
                      </div>
                  ))  
                }   
                </nav> 
                <p className='mt-8 text-center text-gray-400'>&copy; 2021 829-llc all rights reserved. </p>
            </div>
        </footer>
    )
}
   