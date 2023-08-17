package com.kim.learnspringaop.aopexample.aspects;

import org.aspectj.lang.annotation.Pointcut;

public class CommonPointcutConfig {

	@Pointcut("execution(* com.kim.learnspringaop.aopexample.*.*.*(..))")
	public void businessAndDataPackageConfig() {
	}

	@Pointcut("execution(* com.kim.learnspringaop.aopexample.business.*.*(..))")
	public void businessPackageConfig() {
	}

	@Pointcut("execution(* com.kim.learnspringaop.aopexample.data.*.*(..))")
	public void dataPackageConfig() {
	}

	@Pointcut("bean(*Service*)")
	public void allPackageConfigUsingBean() {
	}

	@Pointcut("@annotation(com.kim.learnspringaop.aopexample.annotations.TrackTime)")
	public void trackTimeAnnotation() {
	}
}