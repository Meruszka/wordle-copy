import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function Box({ letter, color }: { letter: string; color: string }) {
  const [backgroundColor, setBackgroundColor] = useState('white')

  useEffect(() => {
    setBackgroundColor(color)
  }, [color])

  return (
    <div
      className='h-10 w-10 border-2 border-sky-500 flex justify-center items-center m-1'
      style={{ backgroundColor: backgroundColor }}
    >
      <span>{letter}</span>
    </div>
  )
}

Box.propTypes = {
  letter: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default Box
