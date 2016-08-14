<?php

if(defined('SCAKE_PHP'))
{
	return;
}
else
{
	define('SCAKE_PHP', 1);
}


	if(!defined('DS'))
	{
		define('DS', DIRECTORY_SEPARATOR);
	}

    if(!defined('SCAKE_PATH'))
	{
		define('SCAKE_PATH', dirname(__FILE__));
	}

    if(!defined('SCAKE_DIR'))
	{
		define('SCAKE_DIR', basename(SCAKE_PATH));
	}


    if(!defined('CONFIGS'))
	{
		define('CONFIGS', SCAKE_PATH . DS . 'config');
	}

    if(!defined('LIBS'))
	{
		define('LIBS', SCAKE_PATH . DS . 'libs');
	}


	include_once(CONFIGS . DS . 'core.php');
	include_once(LIBS . DS . 'basics.php');

    date_default_timezone_set('PRC');
    define('TIMESTAMP', time()); // unix timestamp
    define('NOW', date('Y-m-d H:i:s', TIMESTAMP)); // 2008-01-01 00:00:00
    define('TODAY', date('Y-m-d', TIMESTAMP)); // 2008-01-01

    libs('object', 'dispatcher');

?>
