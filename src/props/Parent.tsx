import { Child, ChildAsFC } from './Child';

const Parent = () => {
    return <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
        Hola
    </ChildAsFC>
}

export default Parent;