<?php
/**
 * Created by PhpStorm.
 * User: David
 * Date: 2016/8/20
 * Time: 15:26
 */

// home.model.php

if(defined('ADMIN_MODEL_PHP'))
{
    return;
}
else
{
    define('ADMIN_MODEL_PHP', 1);
}


class AdminModel extends AppModel
{
    public function __construct(& $controller)
    {
        parent::__construct($controller);
    }

}

// end of script