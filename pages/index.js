import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wordToGuess, setWordToGuess] = useState("");

  const addGuessLetter = useCallback(
    (elem) => {
      setGuessedLetters((curr) => [...curr, elem]);
    },
    [guessedLetters]
  );

  // useEffect(() => {
  //   if (guess.length > 0) {
  //     if (testWord.includes(guess)) {
  //       correctGuessedLetters.push(guess);
  //       setCorrectGuessedLetters(correctGuessedLetters);
  //     } else {
  //       incorrectGuesses.push(guess);
  //       setIncorrectGuesses(incorrectGuesses);
  //     }
  //   }
  // });

  return (
    <div className={styles.main}>
      <Header />
      <Hangman />
      <Keyboard
        guess={guessedLetters}
        addGuessLetter={addGuessLetter}
        incorrect={guessedLetters.filter((elem)=> !testWord.includes(elem))}
        correct={guessedLetters.filter((elem)=> testWord.includes(elem))}
      />
    </div>
  );
}
