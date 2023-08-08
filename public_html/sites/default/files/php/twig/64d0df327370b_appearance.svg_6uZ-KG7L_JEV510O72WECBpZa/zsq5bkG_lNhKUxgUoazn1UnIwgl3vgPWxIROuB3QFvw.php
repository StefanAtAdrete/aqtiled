<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* modules/contrib/bootstrap_styles/images/ui/appearance.svg */
class __TwigTemplate_2d8575de9fbc86f46fe1966e76678c1e extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<svg height=\"300\" width=\"300\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">
\t<path d=\"M43.3 167h345.1c9.4 0 16.6-7.3 16.6-16.7V115h2.4c24.4 0 44.3 20.1 44.3 44.5S431.8 204 407.4 204H205.9c-9.4 0-16.9 7.1-16.9 16.5V289h-26.3c-9.4 0-16.7 7.4-16.7 16.8v160.4c0 9.4 7.3 16.9 16.7 16.9h86.4c9.4 0 16.9-7.5 16.9-16.9V305.8c0-9.4-7.5-16.8-16.9-16.8H223v-51h184.4c43.1 0 78.3-35.4 78.3-78.5S450.6 81 407.4 81H405V45.9c0-9.4-7.2-16.9-16.6-16.9H43.3C33.9 29 26 36.5 26 45.9v104.5c0 9.3 7.9 16.6 17.3 16.6zM232 449h-52V323h52v126zM60 63h311v70H60V63z\"/>
</svg>";
    }

    public function getTemplateName()
    {
        return "modules/contrib/bootstrap_styles/images/ui/appearance.svg";
    }

    public function getDebugInfo()
    {
        return array (  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<svg height=\"300\" width=\"300\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">
\t<path d=\"M43.3 167h345.1c9.4 0 16.6-7.3 16.6-16.7V115h2.4c24.4 0 44.3 20.1 44.3 44.5S431.8 204 407.4 204H205.9c-9.4 0-16.9 7.1-16.9 16.5V289h-26.3c-9.4 0-16.7 7.4-16.7 16.8v160.4c0 9.4 7.3 16.9 16.7 16.9h86.4c9.4 0 16.9-7.5 16.9-16.9V305.8c0-9.4-7.5-16.8-16.9-16.8H223v-51h184.4c43.1 0 78.3-35.4 78.3-78.5S450.6 81 407.4 81H405V45.9c0-9.4-7.2-16.9-16.6-16.9H43.3C33.9 29 26 36.5 26 45.9v104.5c0 9.3 7.9 16.6 17.3 16.6zM232 449h-52V323h52v126zM60 63h311v70H60V63z\"/>
</svg>", "modules/contrib/bootstrap_styles/images/ui/appearance.svg", "/app/public_html/modules/contrib/bootstrap_styles/images/ui/appearance.svg");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array();
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                [],
                [],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
