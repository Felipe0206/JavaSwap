import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Primera fila */}
          <div className="col-span-1 md:col-span-4 md:flex md:justify-between">
            {/* Primera columna */}
            <div className="md:w-1/4">
              <h3 className="text-xl font-semibold mb-4">ABOUT</h3>
              <ul className="mb-6">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/launch">Launch</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/community">Community</Link></li>
                <li><Link href="/java-token">JAVA Token</Link></li>
              </ul>
              <h3 className="text-xl font-semibold mb-4">—</h3>
              <ul>
                <li>Lunar Launch</li>
                <li>Swap Daily</li>
              </ul>
            </div>
            {/* Segunda columna */}
            <div className="md:w-1/4">
              <h3 className="text-xl font-semibold mb-4">HELP</h3>
              <ul className="mb-6">
                <li><Link href="/help">HELP</Link></li>
                <li><Link href="/customer-support">Customer Support</Link></li>
                <li><Link href="/troubleshooting">Troubleshooting</Link></li>
                <li><Link href="/guides">Guides</Link></li>
              </ul>
            </div>
            {/* Tercera columna */}
            <div className="md:w-1/4">
              <h3 className="text-xl font-semibold mb-4">DEVELOPERS</h3>
              <ul className="mb-6">
                <li><a href="https://github.com"><i className="fab fa-github"></i> Github</a></li>
                <li><a href="https://documentation.com">Documentation</a></li>
                <li><a href="https://bugbounty.com">Bug Bounty</a></li>
                <li><a href="https://rugdog.com">RugDog</a></li>
                <li><a href="https://careers.com">Careers</a></li>
              </ul>
            </div>
            {/* Cuarta columna */}
            <div className="md:w-1/4 flex justify-center items-center">
              <img src="/logo.png" alt="Logo" className="h-12" />
            </div>
          </div>
          {/* Segunda fila */}
          <div className="col-span-1 md:col-span-4 flex justify-center">
            <a href="#" className="text-white mr-4"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white mr-4"><i className="fab fa-telegram"></i></a>
            <a href="#" className="text-white mr-4"><i className="fab fa-reddit"></i></a>
            <a href="#" className="text-white"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
