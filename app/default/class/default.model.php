<?php

// default.model.php

if(defined('DEFAULT_MODEL_PHP'))
{
    return;
}
else
{
    define('DEFAULT_MODEL_PHP', 1);
}


class DefaultModel extends AppModel
{
    public function __construct(& $controller)
    {
        parent::__construct($controller);
    }

}

// end of script