import React from 'react'

const Intro = () => {
  return (
    
    <div className='flex flex-col items-center px-4 md:px-8 '>
        <div className='max-w-3xl border border-x-transparent border-y-sky-600 p-5'>
            <h2 className='text-xl font-semibold mb-4 text-center'>Hello and Welcome! 👋</h2>
              <p className='text-left leading-relaxed text-base pb-6'>
                I write <strong>technical documentation</strong> and build the things I
                document. I started with <strong>Java</strong> and <strong>SQL</strong> in 2022
                (Java SE 11, final grade 100/100), which took me into{' '}
                <strong>RPA projects for banking clients</strong>, where I both wrote the
                automation code and owned the documentation, for the development team and for
                the end users. I obtained the "Multimedia Products Designer" (Frontend)
                certification in 2023 and have since built production sites with{' '}
                <strong>TypeScript</strong>, <strong>React + Next.js</strong>. In 2025 I
                completed the <strong>MuleSoft Academy</strong>:{' '}
                <strong>API-led connectivity</strong> on the{' '}
                <strong>Anypoint Platform</strong>,{' '}
                <strong>DataWeave (JSON, XML, CSV transformations)</strong>,{' '}
                <strong>mUnit</strong> testing, CloudHub deployment. In 2026, a 200-hour{' '}
                <strong>SAP ECC 6.0</strong> course covering the{' '}
                <strong>order-to-cash</strong> and <strong>procure-to-pay</strong> cycles:
                material and vendor master data, purchase requisitions and orders, goods
                receipt and invoice verification, sales orders and price lists, plus general
                ledger basics and an introduction to ABAP.
              </p>
                <p className='text-left leading-relaxed text-base pb-6'>
                  I also design documentation and training material. I am currently building a{' '}
                  <strong>144-hour corporate presentation on AI for business processes</strong>:
                  practical use of <strong>AI tools</strong> such as ChatGPT, Claude, Copilot and
                  Gemini, among others; writing effective prompts for office work; reading and
                  mapping a business process before automating any part of it; drafting business
                  communications; data organisation and analysis;{' '}
                  <strong>data security and anonymisation</strong>; fact-checking AI output; and
                  building presentations. The slides are written one by one, from my own
                  research: I use a <strong>Python</strong> toolkit only to generate the empty
                  skeleton and keep the layout consistent, so the time goes into the content
                  rather than into the formatting.
                </p>
        </div>
    </div>
    
  )
}

export default Intro