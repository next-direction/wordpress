<?php

$context = Timber::context();

/*echo '<pre>';
var_dump($context);*/

Timber::render('index.twig', $context);