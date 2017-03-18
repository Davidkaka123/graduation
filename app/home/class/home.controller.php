<?php
/**
 * Created by PhpStorm.
 * User: David
 * Date: 2016/8/20
 * Time: 15:26
 */
// home.controller.php

if(defined('HOME_CONTROLLER_PHP'))
{
    return;
}
else
{
    define('HOME_CONTROLLER_PHP', 1);
}

class HomeController extends AppController
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
    public function login()
    {
        $this->view->assign('controller', $this);
        $this->view->display('index');
    }
    public function logincheck()
    {
        $this->view->assign('controller', $this);
        $userName = $this->getParam('name');
        $userPasswd = $this->getParam('passwd');
        $sql = "select userName, realName, passwd, roleName from AdminUser,roletable where userName = '{$userName}' and roleId = roletable.id";
        $this->db->query("SET NAMES UTF8");
        $row = $this->db->getRow($sql);
        $res = $this->model->loginCheck($userName, $userPasswd, $row);
        if ($res) {
            $this->session->set('userName', $userName);
            $this->session->set('realName', $row['realName']);
            $this->session->set('userRole', $row['roleName']);
            $this->view->assign('userInfo', $row);
            $this->view->display('FirstPage');
        } else {
            $this->view->display('index');
        }
    }
    public function index()
    {
        $this->view->assign('controller', $this);
        $this->view->display('FirstPage');
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
