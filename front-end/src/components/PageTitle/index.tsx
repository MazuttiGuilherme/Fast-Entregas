import styled from "styled-components"

type Props = {
    children: React.ReactNode
}


export function PageTitle({ children }: Props) {
    return (
        <TitleStyled className="mt-4 text-center">{children}</TitleStyled>
    )
}

const TitleStyled = styled.h1`
    font-weight: 400;
    color: #1117a3;
`