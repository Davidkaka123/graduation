<?php

if(defined('CONFIG_DATABASE_PHP'))
{
	return;
}
else
{
	define('CONFIG_DATABASE_PHP', 1);
}

class DATABASE_CONFIG
{
		public static $databases = array (
			'demo' => array (
				'type'     => 'mysqli',
				'host'     => 'localhost',
				'user'     => 'root',
				'psw'      => '',
				'database' => 'david'
			)
		);		
}

?>
