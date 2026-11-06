export default function PokemonCard({pokemonData}) {
    
     if (!pokemonData) {
     return <h1>Cargando pokemon...</h1>
  }
  return (
    <div className="border-2 border-gray-300 rounded-lg bg-blue-100 p-4">
          <img src={pokemonData.sprites.front_default}
      alt="pokemonimage" 
      className='w-full h-48 object-cover' />
      <div>
        <h2 className='text-xl font-semibold capitalize'>
            {pokemonData.name}
        </h2>
        <p>ID: {pokemonData.id}</p>
      </div>
    </div>
  )
}