import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">About KJSIT</h3>
              <p className="text-primary-foreground/80">
                K. J. Somaiya Institute of Technology strives for excellence in education and research.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>support@kjsit.edu.in</li>
                <li>+91 22 XXXX XXXX</li>
                <li>Mumbai, Maharashtra</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support Hours</h3>
              <p className="text-primary-foreground/80">
                Monday - Friday<br />
                9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} KJSIT Transcript Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer