import React, { useState, useEffect, useRef } from 'react';
import { useInterval } from '../useInterval';
import {
    canvas_size,
    apple_start,
    directions,
    scale,
    snake_start,
    initial_speed,
    maxPoints,
    direction_start,
} from './constants';
import '../level1/Level1.module.css'
import {Button, Grid} from "@mui/material";

export interface ICoords {
    x: number;
    y: number;
}

function Level2() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [snake, setSnake] = useState<Array<ICoords>>(snake_start);
    const [apple, setApple] = useState<ICoords>(apple_start);
    const [speed, setSpeed] = useState<number | null>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [GameOver, setGameOver] = useState<boolean>(false);
    const [direction, setDirection] = useState<ICoords>(direction_start);
    const [points, setPoints] = useState<number>(0);
    const [hasFinishedGame, setHasFinishedGame] = useState<boolean>(
        false,
    );
    const moveSnake = (event: React.KeyboardEvent) => {
        const { key } = event;
        // Check if key is arrow key
        if (
            key === 'ArrowUp' ||
            key === 'ArrowDown' ||
            key === 'ArrowRight' ||
            key === 'ArrowLeft'
        ) {
            // disable backwards key, this means no collision when going right, and then pressing ArrowLeft
            if (
                direction.x + directions[key].x &&
                direction.y + directions[key].y
            ) {
                setDirection(directions[key]);
            }
        }
    };

    useEffect(() => {
        const context = canvasRef.current?.getContext('2d');
        if (context == null) throw new Error('Could not get context');
        context.setTransform(scale, 0, 0, scale, 0, 0);
        context.clearRect(0, 0, canvas_size.x, canvas_size.y);
        // Draw Snake
        context.fillStyle = 'green';
        snake.forEach(({ x, y }) => context.fillRect(x, y, 1, 1));
        // Draw Apple
        context.fillStyle = 'red';
        context.fillRect(apple.x, apple.y, 1, 1);
    }, [snake, apple]);

    const gameLoop = () => {
        const snakeCopy = [...snake]; // Create shallow copy to avoid mutating array
        const newSnakeHead: ICoords = {
            x: snakeCopy[0].x + direction.x,
            y: snakeCopy[0].y + direction.y,
        };
        if (checkCollision(newSnakeHead)) endGame();
        if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
        snakeCopy.unshift(newSnakeHead);
        setSnake(snakeCopy);
    };

    const startGame = () => {
        setIsPlaying(true);
        setPoints(0);
        setHasFinishedGame(false);
        setSnake(snake_start);
        setApple(apple_start);
        setDirection(direction_start);
        setSpeed(initial_speed);
        setGameOver(false);
        wrapperRef.current?.focus();
    };

// update endGame
    const endGame = () => {
        setIsPlaying(false);
        setSpeed(null);
        setGameOver(true);
    };

    const checkCollision = (piece: ICoords, snoko: ICoords[] = snake) => {
        // Wall Collision Detection
        for (const segment of snoko) {
            if (piece.x === segment.x && piece.y === segment.y) return true;
        }

        if (
            piece.x * scale >= canvas_size.x ||
            piece.x < 0 ||
            piece.y * scale >= canvas_size.y ||
            piece.y < 0
        ) {
            return true;
        }

        return false;
    };
//сталкивается ли змея с яблоком
    const checkAppleCollision = (newSnake: ICoords[]) => {
        if (newSnake[0].x === apple.x && newSnake[0].y === apple.y) {
            let newApple = createRandomApple();
            while (checkCollision(newApple, newSnake)) {
                newApple = createRandomApple();
            }
            setPoints(points + 1);
            if (points === maxPoints) {
                setHasFinishedGame(true);
                endGame();
            }
            setApple(newApple);
            return true;
        }
        return false;
    };
//случайное появление яблок
    const createRandomApple = () => {
        return {
            x: Math.floor((Math.random() * canvas_size.x - 10) / scale),
            y: Math.floor((Math.random() * canvas_size.y - 10) / scale),
        };
    };

    useInterval(() => gameLoop(), speed);





    return(
        <div className="wrapper" >
            <div>Snake Game(Level 2)</div>
            <div
                ref={wrapperRef}
                className="canvas"
                role="button"
                tabIndex={0}
                onKeyDown={(event: React.KeyboardEvent) => moveSnake(event)}
            >
                <canvas
                    style={GameOver
                        ? { border: '1px solid black', opacity: 0.5 }
                        : { border: '1px solid black' }}
                    ref={canvasRef}
                    width={canvas_size.x}
                    height={canvas_size.y}
                />
                {GameOver && <div className="game-over">Game Over</div>}
                {!isPlaying && (
                    <Grid >
                        <Button variant="outlined" className="start" onClick={startGame}>
                            Start Game
                        </Button>
                    </Grid>)}
                {hasFinishedGame && <p className="finished-game">Congratulations</p>}
                <p className="points">{points}</p>
            </div>
        </div>
    )
}

export default Level2