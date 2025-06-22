import { Toggle } from '../lib/main'
import './App.css'

export default function App() {
  return (
    <div>
      <h1>Toggle Component Examples</h1>
      <hr />
      <h2>Default size (medium)</h2>
      <Toggle />
      <h2>Small size</h2>
      <Toggle size='small' />
      <h2>Large size</h2>
      <Toggle size='large' />
    </div>
  )
}
