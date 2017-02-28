<?php
/**
 * Created by PhpStorm.
 * User: David
 * Date: 2016/8/20
 * Time: 15:26
 */

// home.model.php

if(defined('PRINT_MODEL_PHP'))
{
    return;
}
else
{
    define('PRINT_MODEL_PHP', 1);
}


class PrintModel extends AppModel
{
    public function __construct(& $controller)
    {
        parent::__construct($controller);
    }

}

// end of script