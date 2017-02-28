<?php
/**
 * Created by PhpStorm.
 * User: David
 * Date: 2016/8/20
 * Time: 15:26
 */
// home.controller.php

if(defined('BUFFERED_CONTROLLER_PHP'))
{
    return;
}
else
{
    define('BUFFERED_CONTROLLER_PHP', 1);
}

class BufferedController extends AppController
{
    private $db;
    public function __construct()
    {
        parent::__construct();
        config('database');
        $this->db = DBO::instance(DATABASE_CONFIG::$databases['demo']);
        $this->db->connect();
    }

    /**
     * 解析方法
     */
    public function index()
    {
        $this->view->assign('controller', $this);
        $this->view->display('bufferedPage');
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
