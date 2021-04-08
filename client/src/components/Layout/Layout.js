import React from 'react'
import { Container } from 'semantic-ui-react'

export const Layout = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}
