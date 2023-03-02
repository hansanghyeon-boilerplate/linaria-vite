import { styled } from '@linaria/react';

const Button = styled.button<{ color?: string }>`
  background: ${({ color = 'gray' }) => color};
  padding: 16px 24px;
  transition: 200ms;
  color: white;
  border-radius: 999px;
  display: inline-flex;

  &:hover {
    background: ${({ color = 'gray' }) => color};
    background-color: white;
  }
`

function App() {

  return (
    <div>
      <Button>test</Button>
    </div>
  )
}

export default App
