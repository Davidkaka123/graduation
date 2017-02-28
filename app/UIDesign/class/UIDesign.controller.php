<?php

// uidesign.controller.php

if(defined('UIDESIGN_CONTROLLER_PHP'))
{
    return;
}
else
{
    define('UIDESIGN_CONTROLLER_PHP', 1);
}

class UidesignController extends AppController
{
    private $db;
    public function __construct()
    {
        parent::__construct();
//        config('database');
//        $this->db = DBO::instance(DATABASE_CONFIG::$databases['demo']);
//        $this->db->connect();
    }

    /**
     * 解析方法
     */
    public function index()
    {
        $this->view->assign('controller', $this);
        $this->view->display('UIDesign');
    }

    public function option()
    {
        $this->view->assign('controller', $this);
        $this->view->display('TestPage');
    }


    public function add_user() {
        $rtx = $this->getParam('u');
        $this->db->insert(array('rtx'=>$rtx, 'role'=>2), 't_user');
        $this->get_all();
    }

    public function get_all() {
        $userList = $this->db->getAll('select * from t_user;');
        $this->view->assign('userList', $userList);
        $this->view->display('user_details');
    }

    public function throw_demo() {
        try {
            $this->db->getAll('select * from non_exist_table;');
        } catch(Exception $e) {
            echo $e->getMessage();
        }
    }
}
?>
