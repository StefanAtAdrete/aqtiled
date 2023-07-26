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

/* themes/custom/b5subtheme/templates/commerce-cart-block.html.twig */
class __TwigTemplate_fcc493c13f3f07c8d492ace7444abb9a extends \Twig\Template
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
        echo "<div";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attributes"] ?? null), 1, $this->source), "html", null, true);
        echo ">
\t<div class=\"cart-block--summary\">
\t\t<a class=\"cart-block--link__expand\" href=\"";
        // line 3
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url"] ?? null), 3, $this->source), "html", null, true);
        echo "\">
\t\t\t<span class=\"cart-block--summary__icon\">";
        // line 4
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["icon"] ?? null), 4, $this->source), "html", null, true);
        echo "</span>
\t\t\t<span class=\"cart-block--summary__count badge rounded-pill bg-light text-dark\">";
        // line 5
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["count"] ?? null), 5, $this->source), "html", null, true);
        echo "</span>
\t\t</a>
\t</div>
\t";
        // line 8
        if (($context["content"] ?? null)) {
            // line 9
            echo "\t\t<div class=\"cart-block--contents\">
\t\t\t<div class=\"cart-block--contents__inner\">
\t\t\t\t<div class=\"cart-block--contents__items\">
\t\t\t\t\t";
            // line 12
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content"] ?? null), 12, $this->source), "html", null, true);
            echo "
\t\t\t\t</div>
\t\t\t\t<div class=\"cart-block--contents__links\">
\t\t\t\t\t";
            // line 15
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["links"] ?? null), 15, $this->source), "html", null, true);
            echo "
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t";
        }
        // line 20
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "themes/custom/b5subtheme/templates/commerce-cart-block.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  80 => 20,  72 => 15,  66 => 12,  61 => 9,  59 => 8,  53 => 5,  49 => 4,  45 => 3,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div{{attributes}}>
\t<div class=\"cart-block--summary\">
\t\t<a class=\"cart-block--link__expand\" href=\"{{ url }}\">
\t\t\t<span class=\"cart-block--summary__icon\">{{ icon }}</span>
\t\t\t<span class=\"cart-block--summary__count badge rounded-pill bg-light text-dark\">{{ count }}</span>
\t\t</a>
\t</div>
\t{% if content %}
\t\t<div class=\"cart-block--contents\">
\t\t\t<div class=\"cart-block--contents__inner\">
\t\t\t\t<div class=\"cart-block--contents__items\">
\t\t\t\t\t{{ content }}
\t\t\t\t</div>
\t\t\t\t<div class=\"cart-block--contents__links\">
\t\t\t\t\t{{ links }}
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t{% endif %}
</div>
", "themes/custom/b5subtheme/templates/commerce-cart-block.html.twig", "/app/public_html/themes/custom/b5subtheme/templates/commerce-cart-block.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 8);
        static $filters = array("escape" => 1);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if'],
                ['escape'],
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
