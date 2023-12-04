import Dogs from './components/dog';
import Memes from './components/memes';
import Pokemon from './components/Pokemon';

export default function Home() {
  //const [pokemonName, setPokemonName] = useState("");
  return (
    <main>
      <h1>Can you catch them all?</h1>
      <Dogs></Dogs>
      <Memes></Memes>
      <Pokemon></Pokemon>
    </main>
  );
}
