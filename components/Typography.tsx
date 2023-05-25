import { FunctionComponent} from 'react'

interface Props {
    text: string
}

export const Typography: FunctionComponent<Props> = ({text}) => {
    return <span>{text}</span>
}