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

/* themes/custom/b5subtheme/templates/layout/page.html.twig */
class __TwigTemplate_ef6aa2cd627d5980b51187a7754b0a12 extends \Twig\Template
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
        // line 47
        $context["nav_classes"] = ((("navbar navbar-expand-lg" . (((        // line 48
($context["b5_navbar_schema"] ?? null) != "none")) ? ((" navbar-" . $this->sandbox->ensureToStringAllowed(($context["b5_navbar_schema"] ?? null), 48, $this->source))) : (" "))) . (((        // line 49
($context["b5_navbar_schema"] ?? null) != "none")) ? ((((($context["b5_navbar_schema"] ?? null) == "dark")) ? (" text-light") : (" text-dark"))) : (" "))) . (((        // line 50
($context["b5_navbar_bg_schema"] ?? null) != "none")) ? ((" bg-" . $this->sandbox->ensureToStringAllowed(($context["b5_navbar_bg_schema"] ?? null), 50, $this->source))) : (" ")));
        // line 52
        echo "
";
        // line 54
        $context["footer_classes"] = (((" " . (((        // line 55
($context["b5_footer_schema"] ?? null) != "none")) ? ((" footer-" . $this->sandbox->ensureToStringAllowed(($context["b5_footer_schema"] ?? null), 55, $this->source))) : (" "))) . (((        // line 56
($context["b5_footer_schema"] ?? null) != "none")) ? ((((($context["b5_footer_schema"] ?? null) == "dark")) ? (" text-light") : (" text-dark"))) : (" "))) . (((        // line 57
($context["b5_footer_bg_schema"] ?? null) != "none")) ? ((" bg-" . $this->sandbox->ensureToStringAllowed(($context["b5_footer_bg_schema"] ?? null), 57, $this->source))) : (" ")));
        // line 59
        echo "
<header>
\t";
        // line 61
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 61), 61, $this->source), "html", null, true);
        echo "
\t";
        // line 62
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "usernav", [], "any", false, false, true, 62)) {
            // line 63
            echo "\t\t<div class=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["nav_classes"] ?? null), 63, $this->source), "html", null, true);
            echo "\" id=\"userNav\">
\t\t\t<div class=\"usernav container\">";
            // line 64
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "usernav", [], "any", false, false, true, 64), 64, $this->source), "html", null, true);
            echo "</div>
\t\t</div>
\t";
        }
        // line 67
        echo "\t";
        if (((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "nav_branding", [], "any", false, false, true, 67) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "nav_main", [], "any", false, false, true, 67)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "nav_additional", [], "any", false, false, true, 67))) {
            // line 68
            echo "\t\t<nav class=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["nav_classes"] ?? null), 68, $this->source), "html", null, true);
            echo "\">
\t\t\t<div class=\"";
            // line 69
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["b5_top_container"] ?? null), 69, $this->source), "html", null, true);
            echo "\">
\t\t\t\t";
            // line 70
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "nav_branding", [], "any", false, false, true, 70), 70, $this->source), "html", null, true);
            echo "
\t\t\t\t";
            // line 76
            echo "\t\t\t\t";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "nav_main", [], "any", false, false, true, 76), 76, $this->source), "html", null, true);
            echo "
\t\t\t\t";
            // line 77
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "nav_additional", [], "any", false, false, true, 77), 77, $this->source), "html", null, true);
            echo "
\t\t\t</div>
\t\t</div>
\t</nav>
";
        }
        // line 81
        echo "</header><main role=\"main\">
<a id=\"main-content\" tabindex=\"-1\"></a>
";
        // line 84
        echo "
";
        // line 86
        $context["sidebar_first_classes"] = (((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 86) && twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 86))) ? ("col-12 col-sm-6 col-lg-3") : ("col-12 col-lg-3"));
        // line 88
        echo "
";
        // line 90
        $context["sidebar_second_classes"] = (((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 90) && twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 90))) ? ("col-12 col-sm-6 col-lg-3") : ("col-12 col-lg-3"));
        // line 92
        echo "
";
        // line 94
        $context["content_classes"] = (((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 94) && twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 94))) ? ("col-12 col-lg-6") : ((((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 94) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 94))) ? ("col-12 col-lg-9") : ("col-12"))));
        // line 96
        echo "

<div class=\"";
        // line 98
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["b5_top_container"] ?? null), 98, $this->source), "html", null, true);
        echo "\">
\t";
        // line 99
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "breadcrumb", [], "any", false, false, true, 99)) {
            // line 100
            echo "\t\t";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "breadcrumb", [], "any", false, false, true, 100), 100, $this->source), "html", null, true);
            echo "
\t";
        }
        // line 102
        echo "\t<div class=\"row g-0\">
\t\t";
        // line 103
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 103)) {
            // line 104
            echo "\t\t\t<div class=\"order-2 order-lg-1 ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["sidebar_first_classes"] ?? null), 104, $this->source), "html", null, true);
            echo "\">
\t\t\t\t";
            // line 105
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 105), 105, $this->source), "html", null, true);
            echo "
\t\t\t</div>
\t\t";
        }
        // line 108
        echo "\t\t<div class=\"order-1 order-lg-2 ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content_classes"] ?? null), 108, $this->source), "html", null, true);
        echo "\">
\t\t\t";
        // line 109
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 109), 109, $this->source), "html", null, true);
        echo "
\t\t</div>
\t\t";
        // line 111
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 111)) {
            // line 112
            echo "\t\t\t<div class=\"order-3 ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["sidebar_second_classes"] ?? null), 112, $this->source), "html", null, true);
            echo "\">
\t\t\t\t";
            // line 113
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 113), 113, $this->source), "html", null, true);
            echo "
\t\t\t</div>
\t\t";
        }
        // line 116
        echo "\t</div>
</div></main>";
        // line 117
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer", [], "any", false, false, true, 117)) {
            // line 118
            echo "<footer class=\"mt-auto ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer_classes"] ?? null), 118, $this->source), "html", null, true);
            echo "\">
\t<div class=\"";
            // line 119
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["b5_top_container"] ?? null), 119, $this->source), "html", null, true);
            echo "\">
\t\t";
            // line 120
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer", [], "any", false, false, true, 120), 120, $this->source), "html", null, true);
            echo "
\t</div>
</footer>";
        }
    }

    public function getTemplateName()
    {
        return "themes/custom/b5subtheme/templates/layout/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  190 => 120,  186 => 119,  181 => 118,  179 => 117,  176 => 116,  170 => 113,  165 => 112,  163 => 111,  158 => 109,  153 => 108,  147 => 105,  142 => 104,  140 => 103,  137 => 102,  131 => 100,  129 => 99,  125 => 98,  121 => 96,  119 => 94,  116 => 92,  114 => 90,  111 => 88,  109 => 86,  106 => 84,  102 => 81,  94 => 77,  89 => 76,  85 => 70,  81 => 69,  76 => 68,  73 => 67,  67 => 64,  62 => 63,  60 => 62,  56 => 61,  52 => 59,  50 => 57,  49 => 56,  48 => 55,  47 => 54,  44 => 52,  42 => 50,  41 => 49,  40 => 48,  39 => 47,);
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Theme override to display a single page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.html.twig template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - base_path: The base URL path of the Drupal installation. Will usually be
 *   \"/\" unless you have installed Drupal in a sub-directory.
 * - is_front: A flag indicating if the current page is the front page.
 * - logged_in: A flag indicating if the user is registered and signed in.
 * - is_admin: A flag indicating if the user has permission to access
 *   administration pages.
 *
 * Site identity:
 * - front_page: The URL of the front page. Use this instead of base_path when
 *   linking to the front page. This includes the language domain or prefix.
 *
 * Page content (in order of occurrence in the default page.html.twig):
 * - node: Fully loaded node, if there is an automatically-loaded node
 *   associated with the page and the node ID is the second argument in the
 *   page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - page.header: Items for the header region.
 * - page.usernav: Items for the header region.
 * - page.primary_menu: Items for the primary menu region.
 * - page.secondary_menu: Items for the secondary menu region.
 * - page.highlighted: Items for the highlighted content region.
 * - page.help: Dynamic help text, mostly for admin pages.
 * - page.content: The main content of the current page.
 * - page.sidebar_first: Items for the first sidebar.
 * - page.sidebar_second: Items for the second sidebar.
 * - page.footer: Items for the footer region.
 * - page.breadcrumb: Items for the breadcrumb region.
 *
 * @see template_preprocess_page()
 * @see html.html.twig
 */
#}
{%
set nav_classes = 'navbar navbar-expand-lg' ~
  (b5_navbar_schema != 'none' ? \" navbar-#{b5_navbar_schema}\" : ' ') ~
  (b5_navbar_schema != 'none' ? (b5_navbar_schema == 'dark' ? ' text-light' : ' text-dark' ) : ' ') ~
  (b5_navbar_bg_schema != 'none' ? \" bg-#{b5_navbar_bg_schema}\" : ' ')
%}

{%
set footer_classes = ' ' ~
  (b5_footer_schema != 'none' ? \" footer-#{b5_footer_schema}\" : ' ') ~
  (b5_footer_schema != 'none' ? (b5_footer_schema == 'dark' ? ' text-light' : ' text-dark' ) : ' ') ~
  (b5_footer_bg_schema != 'none' ? \" bg-#{b5_footer_bg_schema}\" : ' ')
%}

<header>
\t{{ page.header }}
\t{% if page.usernav %}
\t\t<div class=\"{{ nav_classes }}\" id=\"userNav\">
\t\t\t<div class=\"usernav container\">{{ page.usernav }}</div>
\t\t</div>
\t{% endif %}
\t{% if page.nav_branding or page.nav_main or page.nav_additional %}
\t\t<nav class=\"{{ nav_classes }}\">
\t\t\t<div class=\"{{ b5_top_container }}\">
\t\t\t\t{{ page.nav_branding }}
\t\t\t\t{# <button
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"navbar-toggler collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">{#<span class=\"navbar-toggler-icon\"></span> 
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button> 
\t\t\t\t
\t\t\t\t\t\t\t\t<div class=\"collapse navbar-collapse justify-content-md-end\" id=\"navbarSupportedContent\"> #}
\t\t\t\t{{ page.nav_main }}
\t\t\t\t{{ page.nav_additional }}
\t\t\t</div>
\t\t</div>
\t</nav>
{% endif %}</header><main role=\"main\">
<a id=\"main-content\" tabindex=\"-1\"></a>
{# link is in html.html.twig #}

{%
  set sidebar_first_classes = (page.sidebar_first and page.sidebar_second) ? 'col-12 col-sm-6 col-lg-3' : 'col-12 col-lg-3'
  %}

{%
  set sidebar_second_classes = (page.sidebar_first and page.sidebar_second) ? 'col-12 col-sm-6 col-lg-3' : 'col-12 col-lg-3'
  %}

{%
  set content_classes = (page.sidebar_first and page.sidebar_second) ? 'col-12 col-lg-6' : ((page.sidebar_first or page.sidebar_second) ? 'col-12 col-lg-9' : 'col-12' )
   %}


<div class=\"{{ b5_top_container }}\">
\t{% if page.breadcrumb %}
\t\t{{ page.breadcrumb }}
\t{% endif %}
\t<div class=\"row g-0\">
\t\t{% if page.sidebar_first %}
\t\t\t<div class=\"order-2 order-lg-1 {{ sidebar_first_classes }}\">
\t\t\t\t{{ page.sidebar_first }}
\t\t\t</div>
\t\t{% endif %}
\t\t<div class=\"order-1 order-lg-2 {{ content_classes }}\">
\t\t\t{{ page.content }}
\t\t</div>
\t\t{% if page.sidebar_second %}
\t\t\t<div class=\"order-3 {{ sidebar_second_classes }}\">
\t\t\t\t{{ page.sidebar_second }}
\t\t\t</div>
\t\t{% endif %}
\t</div>
</div></main>{% if page.footer %}
<footer class=\"mt-auto {{ footer_classes }}\">
\t<div class=\"{{ b5_top_container }}\">
\t\t{{ page.footer }}
\t</div>
</footer>{% endif %}
", "themes/custom/b5subtheme/templates/layout/page.html.twig", "/app/public_html/themes/custom/b5subtheme/templates/layout/page.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 47, "if" => 62);
        static $filters = array("escape" => 61);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
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
