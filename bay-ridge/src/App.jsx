import QuestionPage from "./components/QuestionPage";
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1> Scavenger Hunt of Bay Ridge</h1>
    
      <section id="center">
        <div className="hero">
          
        </div>
        <div>
          <h3>Description</h3>
        
        </div>

        <div>Instructions</div>

        <QuestionPage />


        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Get started!
        </button>
      </section>

    <div>
<b> Gingerbread House</b>
<p>A sweet-named dwelling, all trim and stone</p>
<p>Frosting-like details, but not sugar to the bone</p>
<p>It sits on a corner where stories have grown</p>
    </div>

<div>
  <b>Narrows Garden</b>
  <p>Where green meets the blue of a wide water view</p>
<p>Flowers and trees with a bridge peeking through</p>
<p>Ships pass slowly as breezes blow new</p>
</div>

<div>
  <b>Cannonball Park</b>
  <p>Round iron relics rest here in plain sight</p>
<p>Remnants of battles from a revolutionary fight</p>
<p>Children climb and play where history held tight</p>
</div>

<div><b>American Veterans Memorial Pier</b>
<p>Planks stretch out where sun meets the bay</p>
<p>Honoring service in a solemn display</p>
<p>Benches face water where ferries briefly stay</p>
</div>

<div><b>U.S. Army Star (Entrance to Fort Hamilton)</b>
<p>Gates stand guard with a pass you must show</p>
<p>History lives where the uniforms go</p>
<p>A star marks the entrance to a fort you should know</p>
</div>

<div><b>Our Lady of Angels Church</b>
<p>Stained glass blooms, and petals lie near</p>
<p>A place of reflection through every year</p>
<p>Look for the flower that brings people here</p>
</div>


<div><b>Bay Ridge Bklyn Public Library</b>
<p>Quiet halls where the stories all stack</p>
<p>Pages and pages, no knowledge you lack</p>
<p>Seek something black that floats but not plaque</p>
</div>

<div><b>Verrazzano Bridge</b>
<p>Towers that soar where the narrows run thin</p>
<p>Cars climb its back to reach the Island within</p>
<p>A span with a name some still spell with a grin</p>
</div>

<div><b>Bay Ridge Mural</b>
<p>Paint tells the neighborhood tale on a wall</p>
<p>Blue and orange dominate, standing vivid and tall</p>
<p>History, pride, and the harbor enthrall</p>
</div>

<div><b>Revolutionary War Cemetery</b>
<p>Stones worn smooth where the early years keep</p>
<p>Patriots resting in long, silent sleep</p>
<p>Dates from the 1700s mark ground you tread deep</p>
</div>

<div><b>Doctors' Row</b>
<p>Grand homes in a line with stoops all the same</p>
<p>Healers once lived here and gave the block fame</p>
<p>Architecture with presence and old Brooklyn acclaim</p>
</div>

<div><b>Leif Ericson</b>
<p>A Viking stands watch on a green traffic isle</p>
<p>Nordic explorer with a stern, stony smile</p>
<p>His ship never sailed here, but his statue has style</p></div>

<div><b>Owl's Head</b>
<p>A park with a namesake who watches the trees</p>
<p>Perched in stone, ruling with stoic ease</p>
<p>Find the bird of wisdom among swaying leaves</p>
</div>

      <div className="ticks"></div>

      
    </>
  )
}

export default App

