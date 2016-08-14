<?php

if(defined('CONFIG_SITE_PHP'))
{
	return;
}
else
{
	define('CONFIG_SITE_PHP', 1);
}

/**
 * 框架常量。scake的applibs,uses和loadAppMVC函数依赖此变量。
 */ 
if(!defined('APP_LIBS_PATH'))
{
	define('APP_LIBS_PATH', WEBROOT_PATH . DS . 'libs');
}

/**
 * 框架常量。config函数依赖此变量。用于定位config文件。
 */
if(!defined('APP_CONFIG_PATH'))
{
	define('APP_CONFIG_PATH', WEBROOT_PATH . DS . 'config');
}

/**
 * 框架常量,scake框架的Log类依赖此变量,用户设置log文件的位置。
 * PS:如果不设置，无法查看log，log对于bug定位和开发调试很重要
 */
if(!defined('LOGFILE'))
{
	define('LOGFILE', WEBROOT_PATH . DS . 'log' . DS . 'scake_learn.log');
}

/**
 * 框架常量，用户设置全局日志级别。
 * 日志分为下面级别:
 * LOG_FATAL	1
 * LOG_ERROR	2
 * LOG_WARNING	3
 * LOG_INFO		4
 * LOG_DEBUG	5
 * 小于该界别的日志均会记录。经验：开发环境设置为LOG_DEBUG;运营环境设置为LOG_ERROR或以下。
 */
if(!defined('DEFAULT_LOG_LEVEL'))
{
	define('DEFAULT_LOG_LEVEL', LOG_DEBUG);
}

/**
 * 框架常量，用于设置session周期。Session初始化时需要此设置。
 */
if (!defined('SESSION_LIFE')) 
{
	define('SESSION_LIFE', 3600);
}

/**
 * 开启debug模式，这样warning，error等信息会输出到页面，方便调试。
 * 开发环境打开，运营环境关闭。
 * PS: 由于之前没有设置此值，一致没有正确的定位到问题。
 */
define('DEBUG', 1); // 非常重要
?>
