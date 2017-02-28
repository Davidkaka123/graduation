<?php
/**
 * Created by PhpStorm.
 * User: David
 * Date: 2016/8/20
 * Time: 15:26
 */

// home.model.php

if(defined('INTERPOLATION_MODEL_PHP'))
{
    return;
}
else
{
    define('INTERPOLATION_MODEL_PHP', 1);
}


class InterpolationModel extends AppModel
{
    public function __construct(& $controller)
    {
        parent::__construct($controller);
    }

}

// end of script