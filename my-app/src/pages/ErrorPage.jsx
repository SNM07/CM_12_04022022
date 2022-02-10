import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <div className='errorPageContainer'>
				<h1>404</h1>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <div className='backHome'>
                <Link to='/'>Retourner sur la page d’accueil</Link>
            </div>
			</div>
    )
}