<?php

	if(!defined('DS'))
	{
		define('DS', DIRECTORY_SEPARATOR);
	}

    if(!defined('WEBROOT_PATH'))
	{
		define('WEBROOT_PATH', dirname(__FILE__));
	}


    if(!defined('WEBROOT_DIR'))
	{
		define('WEBROOT_DIR', basename(WEBROOT_PATH));
	}

    if(!defined('APP_PATH'))
	{
		define('APP_PATH', WEBROOT_PATH . DS . 'app');
	}

    if(!defined('APP_DIR'))
	{
		define('APP_DIR', basename(APP_PATH));
	}


	if(!defined('RIGHT_CHECK'))
	{
		define('RIGHT_CHECK', 0);
	}
	
	require_once('scake/scake.php');
	require_once('config/database.php');
	require_once('config/site.php');

	if (!defined('BASE_URL'))
	{
		define('BASE_URL', env('SCRIPT_NAME'));
	}

    if(defined('DEBUG'))
	{
		error_reporting(E_ALL);
	}
	else
	{
		error_reporting(0);
	}

	
	//dispatch url
	try
	{
	     $dispatcher = Dispatcher::instance();
         $dispatcher->dispatch();
    }
	catch(Exception $e)
	{
	    if(!$dispatcher->passargs['ajax'])
	    {
    		$params[] = $e->getMessage();
    		Object::dispatchMethod('system/error', 'error', 'index', $params);
	    }
	    else 
	    {
	        $json['errno'] = 1;
			$json['errmsg'] = $e->getMessage();
			exit(json_encode($json));
	    }
	}




?>
