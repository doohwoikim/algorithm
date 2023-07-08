package com.in28minutes.learnspringframework.game;

import org.springframework.stereotype.Component;

@Component
public class PackmanGame implements GamingConsole {
	public void up() {
		System.out.println("upup");
	}

	public void down() {
		System.out.println("Down");
	}

	public void left() {
		System.out.println("Bakcward");
	}

	public void right() {
		System.out.println("GoGoGo");
	}
}
