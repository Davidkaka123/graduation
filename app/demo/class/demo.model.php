<?php

// demo.model.php

if(defined('DEMO_MODEL_PHP'))
{
	return;
}
else
{
	define('DEMO_MODEL_PHP', 1);
}


class DemoModel extends AppModel 
{
	public function __construct(& $controller)
	{
		parent::__construct($controller);
	}
	
}

// end of script