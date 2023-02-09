import React from 'react'
import { Footer, Blog, Possibility, Features, Help, Header } from './containers';
import { CTA, Brand, Navbar } from './components';



const App = () => {
  return (
    <div className="App">
      <div className = "gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Help />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
