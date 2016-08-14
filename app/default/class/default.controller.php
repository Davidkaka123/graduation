<?php
// default.controller.php

if(defined('DEFAULT_CONTROLLER_PHP'))
{
    return;
}
else
{
    define('DEFAULT_CONTROLLER_PHP', 1);
}

class DefaultController extends AppController
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * ����ҳ�棬������ʾurl�ַ�
     */
    public function index()
    {
        //$this->view->assign('name', $this->getParam('p'));
        $this->view->display('welcome');
    }

    /**
     * ��ʾ��db������û�
     */
    public function add_user() {
        $rtx = $this->getParam('u');
        $this->db->insert(array('rtx'=>$rtx, 'role'=>2), 't_user');
        $this->get_all();
    }

    /**
     * ��ʾ��ʾ�����û�
     */
    public function get_all() {
        $userList = $this->db->getAll('select * from t_user;');
        $this->view->assign('userList', $userList);
        $this->view->display('user_details');
    }

    /**
     * ��ʾ�쳣
     */
    public function throw_demo() {
        try {
            $this->db->getAll('select * from non_exist_table;');
        } catch(Exception $e) {
            echo $e->getMessage();
        }
    }
}
?>
