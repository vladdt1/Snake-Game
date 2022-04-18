import React, {FC} from 'react'

const Home:FC = () => {
    return(
        <div>
            <span style={{marginTop:10}}> Всем привет</span>
            <div style={{marginTop:20}}>
                <span>Данная игра написанна на React TypeScript при помощи библиотеки MUI</span>
            </div>
            <div style={{marginTop:20}}>
                <span>Автор приложения Студент ЛГТУ Титов Владислав</span>
            </div>
            <div style={{marginTop:20}}>
                Ссылка на GitHab с игрой - <a href='https://github.com/vladdt1/Snake-Game'>Snake-Game</a>
            </div>
        </div>
    )
}
